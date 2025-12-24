#!/usr/bin/env python3
"""
Script para configurar la demo de Databricks para Konfío
Ejecuta los scripts SQL en orden para crear el ambiente de demo
"""

from databricks.sdk import WorkspaceClient
from databricks.sdk.service.sql import StatementState
import time
import os

# Configuración
DATABRICKS_HOST = "https://dbc-aa336600-2da5.cloud.databricks.com"
DATABRICKS_TOKEN = "REDACTED_TOKEN"

def get_client():
    """Crear cliente de Databricks"""
    return WorkspaceClient(
        host=DATABRICKS_HOST,
        token=DATABRICKS_TOKEN
    )

def test_connection(client):
    """Probar conexión al workspace"""
    print("🔗 Probando conexión a Databricks...")
    try:
        user = client.current_user.me()
        print(f"✅ Conectado como: {user.user_name}")
        return True
    except Exception as e:
        print(f"❌ Error de conexión: {e}")
        return False

def list_warehouses(client):
    """Listar SQL Warehouses disponibles"""
    print("\n📊 SQL Warehouses disponibles:")
    warehouses = list(client.warehouses.list())
    if not warehouses:
        print("   ⚠️  No hay SQL Warehouses. Necesitas crear uno en la UI de Databricks.")
        print("   → Ve a: SQL Warehouses → Create SQL Warehouse")
        return None
    
    for i, wh in enumerate(warehouses):
        status = "🟢" if wh.state.value == "RUNNING" else "🔴"
        print(f"   {i+1}. {status} {wh.name} (ID: {wh.id}) - {wh.state.value}")
    
    return warehouses[0] if warehouses else None

def list_clusters(client):
    """Listar clusters disponibles"""
    print("\n🖥️  Clusters disponibles:")
    clusters = list(client.clusters.list())
    if not clusters:
        print("   ⚠️  No hay clusters.")
        return None
    
    for i, cl in enumerate(clusters):
        status = "🟢" if cl.state.value == "RUNNING" else "🔴"
        print(f"   {i+1}. {status} {cl.cluster_name} (ID: {cl.cluster_id}) - {cl.state.value}")
    
    return clusters[0] if clusters else None

def list_catalogs(client):
    """Listar catálogos existentes"""
    print("\n📁 Catálogos existentes:")
    try:
        catalogs = list(client.catalogs.list())
        for cat in catalogs:
            print(f"   • {cat.name}")
        return catalogs
    except Exception as e:
        print(f"   ⚠️  No se pudo listar catálogos: {e}")
        return []

def execute_sql_file(client, warehouse_id, filepath):
    """Ejecutar un archivo SQL"""
    print(f"\n📄 Ejecutando: {filepath}")
    
    with open(filepath, 'r') as f:
        sql_content = f.read()
    
    # Dividir por statements (separados por ;)
    statements = [s.strip() for s in sql_content.split(';') if s.strip() and not s.strip().startswith('--')]
    
    for i, stmt in enumerate(statements):
        if not stmt or stmt.startswith('--'):
            continue
            
        # Limpiar comentarios de línea
        clean_stmt = '\n'.join([line for line in stmt.split('\n') if not line.strip().startswith('--')])
        if not clean_stmt.strip():
            continue
            
        print(f"   Ejecutando statement {i+1}/{len(statements)}...")
        try:
            response = client.statement_execution.execute_statement(
                warehouse_id=warehouse_id,
                statement=clean_stmt,
                wait_timeout="30s"
            )
            
            if response.status.state == StatementState.SUCCEEDED:
                print(f"   ✅ OK")
            else:
                print(f"   ⚠️  Estado: {response.status.state}")
                if response.status.error:
                    print(f"      Error: {response.status.error.message}")
        except Exception as e:
            print(f"   ❌ Error: {e}")

def main():
    print("=" * 60)
    print("🚀 DEMO DATABRICKS - KONFÍO")
    print("   Gobernanza de Datos para Escala Bancaria")
    print("=" * 60)
    
    # Conectar
    client = get_client()
    if not test_connection(client):
        return
    
    # Listar recursos
    list_catalogs(client)
    warehouse = list_warehouses(client)
    cluster = list_clusters(client)
    
    if not warehouse:
        print("\n" + "=" * 60)
        print("⚠️  ACCIÓN REQUERIDA:")
        print("   1. Ve a tu workspace de Databricks")
        print("   2. Crea un SQL Warehouse (menú SQL → SQL Warehouses)")
        print("   3. Vuelve a ejecutar este script")
        print("=" * 60)
        return
    
    print(f"\n✅ Usando warehouse: {warehouse.name}")
    
    # Preguntar si continuar
    print("\n" + "=" * 60)
    print("¿Ejecutar scripts de setup? Esto creará:")
    print("   • Catálogo: konfio_demo")
    print("   • Esquemas: credit, customers, audit_reports")
    print("   • Tablas con datos de ejemplo")
    print("   • Tags de gobernanza")
    print("=" * 60)
    
    response = input("\n¿Continuar? (s/n): ").strip().lower()
    if response != 's':
        print("Cancelado.")
        return
    
    # Ejecutar scripts en orden
    setup_dir = os.path.join(os.path.dirname(__file__), 'setup')
    sql_files = sorted([f for f in os.listdir(setup_dir) if f.endswith('.sql')])
    
    for sql_file in sql_files:
        filepath = os.path.join(setup_dir, sql_file)
        execute_sql_file(client, warehouse.id, filepath)
    
    print("\n" + "=" * 60)
    print("✅ SETUP COMPLETADO")
    print("=" * 60)
    print("\nSiguientes pasos:")
    print("   1. Abre Databricks → Catalog → konfio_demo")
    print("   2. Explora las tablas y sus tags")
    print("   3. Ve a la pestaña 'Lineage' de credit_decisions")
    print("   4. Ejecuta las queries de demo/")

if __name__ == "__main__":
    main()


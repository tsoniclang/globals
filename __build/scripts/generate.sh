#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
TSBINDGEN_DIR="$PROJECT_DIR/../tsbindgen"

DOTNET_MAJOR="${1:-10}"
OUT_DIR="$PROJECT_DIR/versions/$DOTNET_MAJOR"
SURFACE_CONFIG="$PROJECT_DIR/__build/templates/$DOTNET_MAJOR/tsbindgen.surface-package.json"

echo "================================================================"
echo "Generating @tsonic/globals surface package"
echo "================================================================"
echo ""
echo "Configuration:"
echo "  surface config: $SURFACE_CONFIG"
echo "  tsbindgen:      $TSBINDGEN_DIR"
echo "  Output:         $OUT_DIR"
echo ""

if [ ! -d "$TSBINDGEN_DIR" ]; then
    echo "ERROR: tsbindgen not found at $TSBINDGEN_DIR"
    exit 1
fi

if [ ! -f "$SURFACE_CONFIG" ]; then
    echo "ERROR: surface config not found at $SURFACE_CONFIG"
    exit 1
fi

mkdir -p "$OUT_DIR"

echo "[1/3] Cleaning output directory..."
cd "$OUT_DIR"
find . -maxdepth 1 -type f \
  ! -name 'package.json' \
  ! -name 'README.md' \
  ! -name 'LICENSE' \
  -exec rm -f {} \; 2>/dev/null || true
echo "  Done"

echo "[2/3] Building tsbindgen..."
cd "$TSBINDGEN_DIR"
dotnet build src/tsbindgen/tsbindgen.csproj -c Release --verbosity quiet
echo "  Done"

echo "[3/3] Generating surface declarations..."
dotnet run --project src/tsbindgen/tsbindgen.csproj --no-build -c Release -- \
    generate -o "$OUT_DIR" \
    --surface-package "$SURFACE_CONFIG"

cp -f "$PROJECT_DIR/README.md" "$OUT_DIR/README.md"
cp -f "$PROJECT_DIR/LICENSE" "$OUT_DIR/LICENSE"

echo ""
echo "================================================================"
echo "Generation Complete"
echo "================================================================"

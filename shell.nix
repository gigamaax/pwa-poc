{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/b331e60725f6608ef66d1e858e0943ea33316833.tar.gz") {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_20
    pnpm
  ];
}


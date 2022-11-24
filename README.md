# About

Install Hashicorp vault cli in Github Actions workflow.

# Usage

- Install latest version
```yaml
steps:
  - name: Install vault
    uses: GitKaran/install-vault-cli@v1
```

- Install specific [version](https://developer.hashicorp.com/vault/docs/release-notes/1.12.0)
```yaml
steps:
  - name: Install vault
    uses: GitKaran/install-vault-cli@v1
    with:
      vault_version: 1.12.0   
```
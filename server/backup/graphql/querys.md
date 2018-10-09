# QUERIES

### Query:

```
query{
  labels{
    id
    alias
  }
}
```

### Query relational:

```
query {
  labels(where: {
    zone: {
      name: "Constitucion"
    }
  }) {
    id
    alias
    zone{
      name
    }
  }
}
```

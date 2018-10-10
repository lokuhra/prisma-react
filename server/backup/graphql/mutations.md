# MUTATIONS

### Mutation create:

```
mutation{
  createZone(data:{name:"Constitucion"}){
    id
    name
  }
}
```


### Mutation create relational:

```
mutation {
  createLabel(data: {
    alias: "TH07"
    zone: {
      connect: {
        name: "Constitucion"
      }
    }
  }) {
    alias
    zone {
      name
    }
  }
}
```

### Mutation update:

```
mutation {
  updateLabel(
    data: {
      alias: "Th99"
    }
    where: {
      id: "cjn0zcvg4wmo90b488of63ojn"
    }
  ) {
    id
    alias
  }
}
```

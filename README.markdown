To use, call it via the LostComment function. Pass it a config object with either an element or the id of an element. This assumes that your textarea ID is unique across your site. If not, pass in an identifier attribute.

Simplest call

```javascript
  LostComment({
    el: 'id'    
  })
```

Call with an element object

```javascript
  LostComment({
    el: element    
  })
```

Call with an identifier

```javascript
  LostComment({
    el: element,
    identifier: 'uniqueSiteIdentifier'   
  })
```

On submit, you'll need to clear the record from localStorage. A future release will include a method to do this for you.

## Browser Support

This should work on any browser that supports localStorage. Use modernizr to enable.

<header class="symbol-info-header"><h1 id="minimum">Minimum</h1><label class="symbol-info-type-label decorator">Decorator</label><label class="api-type-label ajv" title="ajv">ajv</label><label class="api-type-label jsonschema" title="jsonschema">jsonschema</label><label class="api-type-label auto-map" title="The data will be stored on the right place according to the type and collectionType (primitive or collection).">auto-map</label></header>
<!-- summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Minimum }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.24.0/src//common/jsonschema/decorators/minimum.ts#L0-L0">/common/jsonschema/decorators/minimum.ts</a></td></tr></tbody></table></section>
<!-- overview -->


### Overview


<pre><code class="typescript-lang ">function <span class="token function">Minimum</span><span class="token punctuation">(</span>minimum<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span> exclusive?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>...parameters<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> => <span class="token keyword">any</span><span class="token punctuation">;</span></code></pre>


<!-- Parameters -->

<!-- Description -->


### Description

The value of `minimum` MUST be a number, representing an inclusive upper limit for a numeric instance.

If the instance is a number, then this keyword validates only if the instance is greater than or exactly equal to `minimum`.

## Example
### With primitive type

```typescript
class Model {
   @Minimum(10)
   property: number;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "number",
      "minimum": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @Minimum(10)
   @PropertyType(Number)
   property: number[];
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "array",
      "items": {
         "type": "number",
         "minimum": 10
      }
    }
  }
}
```

<!-- Members -->


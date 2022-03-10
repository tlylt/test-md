
```py {.no-line-numbers start-from=5}
print('hide line numbers if `np-line-numbers` is added to the class')
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        cover= 0
        curr = 0
        while curr <= cover:
            cover = max(nums[curr] + curr, cover)
            if cover >= len(nums)-1:
                return True
            curr+=1
        return False
```

```py {.line-numbers start-from=3}
print('show line numbers if `line-numbers` is added to the class')
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        cover= 0
        curr = 0
        while curr <= cover:
            cover = max(nums[curr] + curr, cover)
            if cover >= len(nums)-1:
                return True
            curr+=1
        return False
```

```py {start-from=2}
print('defaults to no line numbers')
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        cover= 0
        curr = 0
        while curr <= cover:
            cover = max(nums[curr] + curr, cover)
            if cover >= len(nums)-1:
                return True
            curr+=1
        return False
```

---


**`codeLineNumbers` option in `site.json` should set the global code line numbers behavior (should show line numbers)**

```xml
<foo>
  <bar type="name">goo</bar>
</foo>
```

**`line-numbers` class should show corresponding line numbers**

```xml {.line-numbers}
<foo>
  <bar type="name">goo</bar>
</foo>
```

**`no-line-numbers` class should hide corresponding line numbers**

```xml {.no-line-numbers}
<foo>
  <bar type="name">goo</bar>
</foo>
```

**`start-from` attr should set inline css in `<code>` tag, enabling lines to start from a specific line number**
```markdown {start-from=30}
*****
-----
```

**`no-line-numbers` class should hide corresponding line numbers even if `start-from` is specified**

```xml {.no-line-numbers start-from=2}
<foo>
  <bar type="name">goo</bar>
</foo>
```
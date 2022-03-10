<frontmatter>
  layout: default.md
  pageNav: 2
</frontmatter>

Updated!

<div class="tree">
  C:/course/
  └── textbook/
      └── <tooltip content="hello">index.md</tooltip>
</div>

# Tree
A new component to display tree-like structures, such as folders and files.

### Single Tree
<tooltip content="test"><i>coupling</i></tooltip>
<tooltip id="tt:trigger_id" content="This tooltip triggered by a trigger"></tooltip>

<tree>
C:/course/
    <tooltip content="hello">index.md</tooltip>
    <trigger for="tt:trigger_id">via trigger</trigger>
</tree>

---
<tree>
Edit me to generate
  a
    nice
      tree
        diagram!
        :)
  b
    c
      d
        e
          f
            g
              h
                a very long file name
</tree>

<tree>
C:/course/
  textbook/
    index.md
  index.md
  reading.md
  site.json
</tree>

<tree>
Edit me to generate
  a
    nice
    tree
  diagram!
  :)
</tree>

**List style**
<tree>
- Edit me to generate
  - a
    - nice
    - tree
  - diagram!
  - :)
</tree>

<tree>
Edit me to generate
  - a
    - nice
    - tree
  - diagram!
  - :)
</tree>

<tree>
* Edit me to generate
  * a
    * nice
    * tree
  * diagram!
  * :)
</tree>

<tree>
+ Edit me to generate
  + a
    + nice
    + tree
  + diagram!
  + :)
</tree>

### Multiple Tree
<tree>
C:/course/
  textbook/
    index.md
C:/course/
  textbook/
    index.md
</tree>

### Inline Markdown
<tree>
C:/course/
  textbook/
    `index.md`
  **index.md**
    ~~index.md~~
    %%dimmed%%
    Super^script^
    ****Super Bold****
    !!Underline!!
    !!Underline with {text=danger}!!{.text-danger}
    <span class="text-danger">!!Underline!!</span>
  __reading.md__
  ++site.json++
  ==hello==
  :construction:
  :fas-file-code:
</tree>

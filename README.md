# Vitepress with mermaidjs

This is just a showcase and it is not recommended using this
approach in a production environment or with existing data.

You cannot use your existing mermaidjs code without modification.

## What to do?

- Create a global component eg. 'Mermaid.vue'
- Add it to the enhanceApp hook in the theme/index.js file
- In your docs index.md use the \<Mermaid\> component and add your content as slots
- For line breaks you need to add \<br \\>

classDiagramm still does not work.

# Organisms

Organisms combine Atoms and Molecules into standalone content groups.

They are often referenced as "sections". For example:

- `header`
- `introduction`
- `guiding-principle`
- `projects`
- `tools`
- `technologies`
- `socials`
- `faqs`
- `footer`

In my projects, i also often place "feature"-dedicated components here. This means those are components that are
explicitly assigned to one feature group. Like:

- `theme`
- `live-edit`
- or `training`

The benefit with this is that all components assigned to this feature are placed in one directory and therefore have one
single source of truth to look, edit and expand it. It has "closure" compared to the other files and folders.

> Tip: Once a component is referenced from two different features, this is a sign to make, name and place it
> in a more generic file / folder.

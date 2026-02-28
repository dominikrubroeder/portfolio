# Portfolio website for a Frontend-End Design Engineer

## 📝 Requirements

Before you write any code, those rules have to be followed for all concepts and implementations:

- Use `sequential-thinking` MCP
- Prepare yourself a proper plan and tell the plan beforehand
- Always use all files to enhance your knowledge in the `docs` folder:
    - `docs/REACT_BEST_PRACTISES.md`
- Make a summary of what was executed, why this was beneficial for the whole project and if possible, tell numbers
  about the improvement (like performance gain)

## ⚛️ Tech-Stack

- `next` version 16+
- `react` version 19+
- `tailwindcss` version 4+
- `typescript` version 5+
- `motion` version 12+

## 📂 Project Structure

- **App**: Main entry point of the application about pages and layouts
- **Components**: Stored in `src/components`
- **Hooks**: Global hooks are stored in `src/hooks`, feature- or component dedicated hooks are stored right in the
  component directory. If a hook is used in several components, it should be stored in the global hook directory
  `src/hooks`
- **Libraries**: Stored in `src/lib`

## 👁️ About the Frontend-End Design Engineering Vision

- Design with code
- Code by design
- Sync design and code in frontend design engineering, it's one craft
- Focus on a color-rich, but not overloaded UI appearance
- Choose color wisely to indicate important actions and hints for the user to navigate and make them aware of it
- In the center of the UI should be text and storytelling, supplemented by icons and svgs
- Use `motion` to animate the UI
    - Do not overload motion, it should be clearly used to support a specific goal
- Keep in mind all accessibility requirements for the UI, such as disabling motion when the user prefers reduced motion

## 🔵 Design System

- **Architecture**: Atomic Design approach by Brad Frost, enhanced with the Subatomic approach including design tokens
    - Design Tokens: Design tokens are key-value pairs of design properties stored in variables. They are getting
      consumed by their bigger entities `atoms`, `molecules`, `organisms`, `templates` and `pages`
    - Atoms: The smallest UI component. It can't be broken further down. Examples are:
        - `button`
        - `icon`
        - `input`
    - Molecules: A group of atoms that build up a larger UI element. Examples are:
        - `form`
        - `dialog`
        - `drawer`
    - Organisms: A group of molecules and atoms resulting in a standalone content element. It is often referred to as
      a "section", so it's self-enclosed compared to other sections. Organisms can also be whole "feature-groups". So
      when a component is only used in this specific feature, and nowhere else, the component should be stored in this
      feature group with the organism directory. All
      components in this directory should be prefixed with the feature name. Examples are:
        - `theme-context`
        - `theme-animation-setting`
        - `theme-color-setting`
        - ...
        - `live-edit-container`
        - `live-edit-context`
        - `live-edit-drawer`
        - ...
    - Templates: Templates build the structure and layout of a page. They are not the page itself yet, they consume the
      actual data which is either passed in or loaded directly in the template. The purpose of templates is to make the
      UI reusable for several pages, while having one source of truth for editing and modifying the template – letting
      the
      pages all adjust accordingly all at once.
    - Pages: The actual, content-rich page the user is presented in the UI. All components come together here, and the
      page is ready for production. This also means with valid metadata for SEO and other structured data.
- **Components**:
    - Use `shadcn/ui` for the most common components
    - Modify the `shadcn/ui` components accordingly to the projects design system appearance
    - When a new component is added, put them in the respective directory of the existing structure
    - Custom components are allowed, but they have to be feature-complete in terms of appearance, function,
      accessibility. Also, maintenance and correct compatibility with the rest of the components are crucial.
    - Stored in `src/components`

## 🟠 Design Principles

1. **Design in system** – Whatever you integrate, it has to be compatiable and fit all other components and systems in
   style, visual apperance, logic, code-structure and the way of interacting with it as human. The
   UI must be a homogenous whole.
2. **Compose accordingly** – The UI is a result of core design principles, business goals, user needs, human psychology
   and interface patterns. It has to match those goals right in the center of them all.

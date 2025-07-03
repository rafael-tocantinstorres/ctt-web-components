# CTT Pagination Component

The `ctt-pagination` component provides a customizable pagination control for navigating through pages of content.

## Features

-   **Dropdown for Items Per Page**: Allows users to select how many items are displayed on each page.
-   **Dynamic Page Navigation**: Generates page numbers and includes "previous" and "next" buttons.
-   **Ellipsis for Large Page Ranges**: Intelligently shortens the list of page numbers when there are many pages.
-   **Customizable**: Can be configured with different numbers of total items, pages, and items per page.

## Usage

```html
<ctt-pagination
  current-page="1"
  total-pages="20"
  items-per-page="10"
  total-items="198"
></ctt-pagination>
```

## Properties

| Property              | Attribute             | Type                                  | Default     | Description                                         |
| --------------------- | --------------------- | ------------------------------------- | ----------- | --------------------------------------------------- |
| `currentPage`         | `current-page`        | `number`                              | `1`         | The currently active page.                          |
| `totalPages`          | `total-pages`         | `number`                              | `1`         | The total number of pages.                          |
| `itemsPerPage`        | `items-per-page`      | `number`                              | `10`        | The number of items to display per page.            |
| `totalItems`          | `total-items`         | `number`                              | `0`         | The total number of items being paginated.          |
| `itemsPerPageOptions` | `items-per-page-options` | `Array<{label: string, value: any}>` | `[...]`     | Options for the items per page dropdown.            |

## Events

| Event                    | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `page-changed`           | Fired when the page is changed.                       |
| `items-per-page-changed` | Fired when the number of items per page is changed.   |

## Styling

The component can be styled using CSS custom properties (tokens).

| CSS Variable                  | Description                               |
| ----------------------------- | ----------------------------------------- |
| `--ctt-font-family`           | Font family for the component text.       |
| `--ctt-color-text-primary`    | Primary text color.                       |
| `--ctt-color-primary-main`    | Background color for the active page.     |
| `--ctt-color-text-inverse`    | Text color for the active page.           |
| `--ctt-spacing-small`         | Small spacing unit.                       |
| `--ctt-spacing-medium`        | Medium spacing unit.                      |
| `--ctt-spacing-large`         | Large spacing unit.                       |
| `--ctt-border-radius-small`   | Border radius for page number buttons.    |
| `--ctt-font-size-medium`      | Font size for page numbers.               |
| `--ctt-font-weight-bold`      | Font weight for the active page number.   |

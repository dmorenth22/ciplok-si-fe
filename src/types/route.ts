import { ComponentType, JSX } from 'react';

/**
 * Represents the route of a page.
 */
export type Route = {
  /**
   * The key of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "dashboard"
   */
  key: string;

  /**
   * The title of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "My Dashboard"
   */
  title: string;

  /**
   * The description of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "Go to My Dashboard Page"
   */
  description?: string;

  /**
   * The path of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "/dashboard"
   */
  path?: string;

  component: () => JSX.Element;

  /**
   * The status of the route
   * @type {boolean}
   * @memberof Route
   * @required
   * @example
   * true
   * @default
   * true
   */
  isEnabled: boolean;

  /**
   * The icon that illustrates the route
   * @type {string}
   * @memberof Route
   * @optional
   * @example
   * DashboardIcon
   */
  icon?: ComponentType;

  /**
   * The array of sub routes
   * @type {Route[]}
   * @memberof Route
   * @optional
   * @example
   * "[{} as Route, ...]"
   */
  subRoutes?: Route[];

  /**
   * The divider indicator for the route
   * @type {boolean}
   * @memberof Route
   * @optional
   * @example
   * true
   * @default
   * false
   */
  appendDivider?: boolean;

  /**
   * Indicate of menu item is expanded
   * @type {boolean}
   * @memberof Route
   * @optional
   * @example
   * true
   * @default
   * false
   */
  expanded?: boolean;
  noLayout?: boolean;
};

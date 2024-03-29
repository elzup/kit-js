module.exports = {
  forbidden: [
    {
      name: 'not-to-test',
      comment: "Don't allow dependencies from outside the test folder to test",
      severity: 'error',
      from: {
        pathNot: '^(__test__|spec)',
      },
      to: {
        path: '^(__test__|spec)',
      },
    },
    {
      name: 'not-to-spec',
      comment:
        "Don't allow dependencies to (typescript/ javascript/ coffeescript) spec files",
      severity: 'error',
      from: {},
      to: {
        path: '\\.spec\\.(js|ts|ls|coffee|litcoffee|coffee\\.md)$',
      },
    },
    {
      name: 'no-circular',
      severity: 'warn',
      comment: "Warn in case there's circular dependencies",
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: 'no-orphans',
      severity: 'info',
      comment: "Inform in case there's orphans hiding in the code base",
      from: {
        orphan: true,
        pathNot: '\\.d\\.ts$',
      },
      to: {},
    },
    {
      name: 'no-deprecated-npm',
      comment: 'These npm modules are deprecated - find an alternative.',
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['deprecated'],
      },
    },
    {
      name: 'not-to-unresolvable',
      comment:
        "Don't allow dependencies on modules dependency-cruiser can't resolve to files on disk (which probably means they don't exist)",
      severity: 'error',
      from: {},
      to: {
        couldNotResolve: true,
      },
    },
    {
      name: 'not-to-dev-dep',
      severity: 'error',
      comment:
        "Don't allow dependencies from src/app/lib to a development only package",
      from: {
        path: '^(src|app|lib)',
        pathNot: '\\.spec\\.(js|ts|ls|coffee|litcoffee|coffee\\.md)$',
      },
      to: {
        dependencyTypes: ['npm-dev'],
      },
    },
    {
      name: 'no-non-package-json',
      severity: 'error',
      comment:
        "Don't allow dependencies to packages not in package.json (except from within node_modules)",
      from: {
        pathNot: '^node_modules',
      },
      to: {
        dependencyTypes: [
          'unknown',
          'undetermined',
          'npm-no-pkg',
          'npm-unknown',
        ],
      },
    },
    {
      name: 'optional-deps-used',
      severity: 'info',
      comment:
        'nothing serious - but just check you have some serious try/ catches around the import/ requires of these',
      from: {},
      to: {
        dependencyTypes: ['npm-optional'],
      },
    },
    {
      name: 'peer-deps-used',
      comment:
        'Warn about the use of a peer dependency (peer dependencies are deprecated with the advent of npm 3 - and probably gone with version 4).',
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['npm-peer'],
      },
    },
    {
      name: 'no-duplicate-dep-types',
      comment:
        "Warn if a dependency you're actually using occurs in your package.json more than once (technically: has more than one dependency type)",
      severity: 'warn',
      from: {},
      to: {
        moreThanOneDependencyType: true,
      },
    },
  ],
  options: {
    exclude: {
      path: '^(src/(__test__|index.ts)|node_modules)',
    },
  },
}

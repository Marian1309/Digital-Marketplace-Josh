module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'update',
        'seo',
        'setup'
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'general',
        'releases',
        'deps',
        'ui',
        'plugin',
        'framework',
        'config',
        'setup',
        'readme',
        'tools',
        'workflow'
      ]
    ]
  }
};

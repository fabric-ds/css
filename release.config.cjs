module.exports = {
    branches: [{ name: 'main' }, { name: 'next', prerelease: true }],
    preset: 'angular',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      [
        '@semantic-release/npm',
        {
          tarballDir: 'release',
          pkgRoot: "packages/component-classes"
        },
      ],
      [
        '@semantic-release/npm',
        {
          tarballDir: 'release',
          pkgRoot: "packages/css"
        },
      ],
      [
        '@semantic-release/npm',
        {
          tarballDir: 'release',
          pkgRoot: "packages/tailwind-config"
        },
      ],
      [
        '@semantic-release/github',
        {
          assets: 'release/*.tgz',
        },
      ],
      [
        'semantic-release-slack-bot',
        {
          notifyOnSuccess: false,
          notifyOnFail: false,
          packageName: '@fabric-ds/css',
          branchesConfig: [
            {
              pattern: 'main',
              notifyOnSuccess: true,
              onSuccessTemplate: {
                text: ':tada: A new release for one or more pacakges in $package_name has been published - $repo_url. \n $release_notes',
              },
            },
          ],
        },
      ],
      ["@semantic-release/git", {
        "assets": [
          "package.json", 
          "packages/component-classes/package.json", 
          "packages/css/package.json",
          "packages/tailwind-config/package.json",
        ]
      }],
    ],
  };

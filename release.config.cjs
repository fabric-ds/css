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
                            text: ':tada: $package_name@$npm_package_version is now available - $repo_url. \n\n $release_notes',
                        },
                    },
                ],
            },
        ],
        '@semantic-release/git',
    ],
};

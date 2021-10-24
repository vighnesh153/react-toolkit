#!/bin/sh

# This script will copy the changelog from CHANGELOG.md to src/CHANGELOG.stories.mdx to be
# picked up by storybook.

echo "import { Meta } from \"@storybook/addon-docs\";\n\n<Meta title=\"Welcome/Changelog\" />\n\n" > ./src/welcome/Changelog.stories.mdx
cat ./CHANGELOG.md >> ./src/welcome/Changelog.stories.mdx

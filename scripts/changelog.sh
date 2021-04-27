#!/bin/sh

# This script will copy the changelog from CHANGELOG.md to src/CHANGELOG.stories.mdx to be
# picked up by storybook.

echo "import { Meta } from \"@storybook/addon-docs/blocks\";\n\n<Meta title=\"Welcome/Changelog\" />\n\n" > ./src/Changelog.stories.mdx
cat ./CHANGELOG.md >> ./src/Changelog.stories.mdx

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { Tree } from '@nx/devkit'

import generator from './migrate'

// migrate is tested in e2e.

describe('migrate generator', () => {
  let tree: Tree
  // const options: MigrateGeneratorSchema = {}

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await generator(tree, {})
  })
})

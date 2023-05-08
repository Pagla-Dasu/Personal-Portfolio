import {createSchema} from 'sanity'

import education from './experience'
import pageInfo from './pageInfo'
import project from './project'
import skill from './skill'
import social from './social'

export const schemaTypes = [pageInfo, education, project, skill, social]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skill, pageInfo, education, social, project]),
})

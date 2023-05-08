import {title} from 'process'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'schoolImage',
      title: 'SchoolImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'affiliation',
      title: 'Affiliation',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
    },
    {
      name: 'technologies',
      title: 'Technologies Learned',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})

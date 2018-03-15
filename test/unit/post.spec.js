'use strict'

const { test, trait } = use('Test/Suite')('Post')

//const Post = use('App/Models/Post')

trait('Test/ApiClient')

test('create post', async ({ client }) => {
  const a = await client
  .post('api/v1/posts')
  .send({
    title: 'test'
  })
  .end()

  a.assertHeader('content-type', 'application/json; charset=utf-8')
  a.assertStatus(400)
  a.assertJSONSubset({
    message: 'fields error'
  })
})

test('create post', async ({ client }) => {
  const a = await client
    .post('api/v1/posts')
    .send({
      title: 'test',
      content: 'coucou le test'
    })
    .end()

  a.assertHeader('content-type', 'application/json; charset=utf-8')
  a.assertStatus(201)
  a.assertJSONSubset({
    id: 1,
    title: 'test',
    content: 'coucou le test'
  })
})

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Post = use('App/Models/Post')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('posts', async ({request, response}) => {
    const body = request.only(['title', 'content'])

    if(body.title && body.content) {
      const newPost = new Post();
      newPost.title = body.title;
      newPost.content = body.content;
      await newPost.save()
      return response.status(201).json(newPost)
    } else {
      return response.status(400).json({message: 'fields error'})
    }
  })
  Route.get('posts', async () => {
    return await Post.all()
  })
  Route.get('posts/:id', async ({ params, request, response}) => {
    const post = await Post.find(params.id)

    if(!post) {
      return response.status(404).json({message: 'Post not found'})
    }

    return response.json(post)
  })
  Route.put('posts/:id', async ({ params, request, response }) => {
    const post = await Post.find(params.id)

    if (!post) {
      return response.status(404).json({ message: 'Post not found' })
    }

    const body = request.only(['title', 'content'])

    if (body.title && body.content) {
      post.title = body.title
      post.content = body.content
      await post.save()
      return response.json(post)
    } else {
      return response.status(400).json({ message: 'fields error' })
    }
  })
  Route.delete('posts/:id', async ({ params, request, response }) => {
    const post = await Post.find(params.id)

    if (!post) {
      return response.status(404).json({ message: 'Post not found' })
    }

    await post.delete()

    return response.json({ message: 'Post deleted!' })
  })
}).prefix('api/v1')

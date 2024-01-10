import React from 'react'
import { useGetPostByIdQuery } from '../../../services/posts'
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/loader';
import { PostCard } from '../../../components/post-card';

export const Post = () => {
  const {id} = useParams()
  const { data: post, isLoading, error, isSuccess } = useGetPostByIdQuery(id);
  return (
    <>
    {isSuccess && !post && <div>Card is empty</div>}
    {error && <div>{`Loading error: ${error}`}</div>}
    {isLoading && <Loader />}
    {post && <PostCard post={post} />}
    </>
  )
}


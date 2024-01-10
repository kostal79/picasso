import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '@entities/chart/posts-list';
import { Loader } from '@shared/loader';
import { PostCard } from '../../../entities/post-card';


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


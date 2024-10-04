import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Post} from "@/.velite";
import {slug} from "github-slugger";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input :string | number) : string {
  const date = new Date(input)
  return date.toLocaleDateString("zh-TW",{
    month:"long",
    day:"numeric",
    year:"numeric"
  })
}

export function sortPosts(posts: Array<Post>){
  return posts.sort((a,b)=>{
    if(a.date > b.date)return -1
    if(a.date > b.date)return 1
    return 0
  })
}

export  function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.forEach(post=>{
    post.tags?.forEach(tag=>{
      tags[tag] = (tags[tag] ?? 0) +1
    })
  })

  return tags
}

export function sortTagsByCount(tags: Record<string, number>){
  // 最多次的放在頂部
  return Object.keys(tags).sort((a,b)=>tags[b]-tags[a])
}

export function getPostsByTagsSlug(posts:Array<Post>,tag: string){
  return posts.filter(post=>{
    if(!post.tags) return false
    const slugfiedTags = post.tags.map(tag=>slug(tag))
    return slugfiedTags.includes(tag)
  })
}
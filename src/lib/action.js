"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./connection";
import { Post } from "./models";

export const addPost = async (formData) => {
    

    // const title = formData.get('title')
    // const desc = formData.get('desc')
    // const slug = formData.get('slug')

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDB()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })

        await newPost.save()
        console.log("saved to db")
        revalidatePath('/blog')
    }catch (err) {
        console.log(err)
    return { error: "Post not  added successfully"};
}
}

export const deletePost = async (formData) => {
    

    // const title = formData.get('title')
    // const desc = formData.get('desc')
    // const slug = formData.get('slug')

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB()
        await Post.findByIdAndDelete(id)

        console.log("deleted db")
        revalidatePath('/blog')
    }catch (err) {
        console.log(err)
    return { error: "Something went wrong"};
}
}
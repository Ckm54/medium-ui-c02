import {
  createCurrentUserHook,
  createClient
} from 'next-sanity';
import createImageUrlBuilder from "@sanity/image-url"

export const config ={
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",


  useCdn: process.env.NODE_ENV === "production"
}

// setup client for data fetching in the getProps page function
export const sanityClient = createClient(config);

// helper function to generate image url
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// helper function for using the current loogged in user
export const currentUser = createCurrentUserHook(config)
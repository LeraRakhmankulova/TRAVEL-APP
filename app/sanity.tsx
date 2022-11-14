import {ClientConfig, createClient} from 'next-sanity'
import {PortableText as PortableTextComponent} from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
    projectId: '1q9hn7w6',
    dataset: 'production',
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2021-10-21',
    useCdn: false
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
    createImageUrlBuilder({clientConfig: config}).image(source)
export const PortableText = (props: any) => (
    <PortableTextComponent components={{}} {...props} />
)
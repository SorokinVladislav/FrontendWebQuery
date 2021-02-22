
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large : string | null
}
export type ProfileType = {
    id: number,
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}


export type JobType = {
    jid: number,
    jobname: string,
    quantity: string,
    lastupdateddate: string,
    product_name: string,
    gtin: string,
    jobstatus: string,
    datatransferstage: string,
    line_name: string,
    batchno: string

}
export type FormValues = {
    displayName: string | undefined;
    email: string | undefined;
    phone: string | undefined;
}

export interface IProfileForm{
    loading: boolean;
    urlPicture: any;
    setLoading: any;
    signOut?: any;
    profileData: any;
}
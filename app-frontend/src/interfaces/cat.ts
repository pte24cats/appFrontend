export interface Cat {
    id?: number;
    cat_name: string;
    cat_color: string;
    cat_description: string;
    good_cat_status: boolean;
    cat_age: number;
    cat_gender: string;
    cat_breed: string;
    cat_picture?: File | string | null;
  }
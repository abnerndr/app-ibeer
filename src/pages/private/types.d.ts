export interface IHome {
    walletValue: number;
    categories: {
      map: any;
      id: string;
      category_name: string;
      color: string;
      photo_url: string;
    };
    user: {
      id: number;
      username: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: boolean;
      createdAt: string;
      updatedAt: string;
      profile_id: string;
      photo_url: string;
    };
    companies:{
      map(arg0: (company: import("../../types/types").Companies) => JSX.Element): import("react").ReactNode;
      id: string;
      company_name: string;
      delivery: boolean;
      ratign: number;
      payment_types:{
         card: boolean;
         money: boolean;
         pix: boolean;  
        },
      photo_url: string;
      banner_url: string;
    }
  }
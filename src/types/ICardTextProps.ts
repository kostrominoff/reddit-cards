export interface ICardTextProps {
  title: string;
  publicTime?: number;
  user: {
    imgPath: string;
    name: string;
  };
  watched: number;
  preview?: string;
  closeFunc?: void;
  isPC?: boolean;
}

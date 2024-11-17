export interface ImageSelectorProps{
    imageUrl: string;
    onSelect: (imageUrl: string) => void;
    isSelected: boolean;
  }
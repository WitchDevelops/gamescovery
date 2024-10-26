import { ListItem, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GenreItemSkeleton = () => {
  return (
    <ListItem paddingY={2}>
      <HStack>
        <Skeleton width="32px" height="32px" borderRadius={8} />
        <SkeletonText width={"calc(100% - 32px)"} noOfLines={1} />
      </HStack>
    </ListItem>
  );
};

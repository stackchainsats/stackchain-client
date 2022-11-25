import React from "react";
import VirtualScrollChild from "./virtual-scroll-child";
import InfiniteScroll from "./infinite-scroll";

/**
 * A wrapper component for implementing virtual and
 * infinite scrolling.
 */
function VirtualAndInfiniteScroll({ listItems, height, lastRowHandler }) {
  const VirtualScrollChildren = listItems.map((listItem, index) => (
    <VirtualScrollChild height={height} key={index}>
      {listItem}
    </VirtualScrollChild>
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export default VirtualAndInfiniteScroll;

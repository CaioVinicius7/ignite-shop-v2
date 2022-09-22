import "react-loading-skeleton/dist/skeleton.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  BodySkeletonContainer,
  HeaderSkeletonContainer,
  SkeletonContainer
} from "./styles";

function SkeletonLoading() {
  return (
    <SkeletonContainer>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <HeaderSkeletonContainer>
          <Skeleton width="8rem" height="4rem" />
          <Skeleton width="2.75rem" height="2.75rem" />
        </HeaderSkeletonContainer>

        <BodySkeletonContainer>
          <Skeleton height="100%" />

          <div>
            <Skeleton height="2rem" width="90%" />
            <Skeleton height="2rem" width="20%" />

            <Skeleton count={5} />

            <footer>
              <Skeleton height="3.5rem" />
            </footer>
          </div>
        </BodySkeletonContainer>
      </SkeletonTheme>
    </SkeletonContainer>
  );
}

export { SkeletonLoading };

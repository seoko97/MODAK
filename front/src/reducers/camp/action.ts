import { campAPI } from "@apis/.";
import { createActionByProps } from "@lib/createActionHandler";

const getCamp = createActionByProps("camp/getCamp", campAPI.getCamp);
const bookmark = createActionByProps("camp/bookmark", campAPI.bookmarkCamp);
const unbookmark = createActionByProps("camp/unbookmark", campAPI.unBookmarkCamp);

export { getCamp, bookmark, unbookmark };

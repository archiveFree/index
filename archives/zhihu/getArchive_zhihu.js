import {
    a1_zhihu as a1,
    a2_zhihu as a2,
    a3_zhihu as a3,
    a4_zhihu as a4,
    a5_zhihu as a5,
    a6_zhihu as a6,
    a7_zhihu as a7
} from "./archive_zhihu";

export function findArchiveById_zhihu(id) {
    var retArchiveContect;

    switch (id) {
        case 1:
            retArchiveContect = a1;
            break;
    
        case 2:
            retArchiveContect = a2;
            break;
            
        case 3:
            retArchiveContect = a3;
            break;

        case 4:
            retArchiveContect = a4;
            break;

        case 5:
            retArchiveContect = a5;
            break;

        case 6:
            retArchiveContect = a6;
            break;


        case 7:
            retArchiveContect = a7;
            break;
        default:
            break;
    }

    return retArchiveContect;
}
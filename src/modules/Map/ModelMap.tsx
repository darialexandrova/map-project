import React, {useState} from "react"
import ViewMap from "src/modules/Map/ViewMap"
import {PageMode} from "src/types/PageType"
import {MapType} from "src/types/MapType"


const ModelMap = (): React.JSX.Element => {

    //
    // ----- Состояние
    //
    const [mode, setMode] = useState<PageMode>(PageMode.Map)
    const [map, setMap] = useState<MapType>(MapType.Political)

    return (
        <ViewMap
            mode={mode}

            map={map}

            onClickMode={setMode}
            onClickMap={setMap}
        />
    )
}

export default ModelMap
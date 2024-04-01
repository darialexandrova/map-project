import React, {useState} from "react"
import ViewMap from "src/modules/Map/ViewMap"
import {PageMode} from "src/types/PageType"
import {MapType} from "src/types/MapType"


const ModelMap = (): React.JSX.Element => {

    //
    // ----- Состояние
    //
    const [mode, setMode] = useState<PageMode>(PageMode.Map)
    const [mapType, setMapType] = useState<MapType>(MapType.Political)

    return (
        <ViewMap
            mode={mode}

            mapType={mapType}

            onClickMode={setMode}
            onClickMap={setMapType}
        />
    )
}

export default ModelMap
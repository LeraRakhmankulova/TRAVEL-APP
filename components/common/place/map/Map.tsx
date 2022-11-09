import styles from './index.module.sass'
import {ComposableMap, Geographies, Geography} from "react-simple-maps"
import {FC} from "react";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const Map: FC<{ location: string }> = ({location}) => {
    return (
        <div className={styles.map}>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            const isCurrent =
                                geo.properties.name === location.country ||
                                geo.id === location.country

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isCurrent ? '#eb601e' : 'black'}
                                    stroke={isCurrent ? 'transparent' : 'black'}
                                    style={{
                                        default: {outline: 'none'},
                                        hover: {outline: 'none'},
                                        pressed: {outline: 'none'}
                                    }}
                                />
                            )
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}

export default Map
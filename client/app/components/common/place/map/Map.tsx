import styles from './index.module.sass'
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps"
import {FC} from "react";
import {GEO_URL} from "../../../../constants";
import {motion, useMotionValue, useTransform} from "framer-motion"

const Map: FC<{ location: string }> = ({location}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-5, 5], [-5, 5])
    const rotateY = useTransform(x, [-500, 500], [-500, 500])
    return (
        <div className={styles.map}>
            <motion.div
                initial={{opacity: 0, scale: 0.7}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.65}}
                drag
                dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
                dragElastic={.015}
                style={{
                    x: x,
                    y: y,
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}>
                <ComposableMap width={200} height={140}
                               projection="geoConicConformal"
                               projectionConfig={{
                                   scale: 200,
                               }}
                               style={{cursor: 'pointer'}}>
                    <ZoomableGroup zoom={0.32}>
                        <Geographies geography={GEO_URL}>
                            {({geographies}) =>
                                geographies.map(geo => {
                                    const isCurrent =
                                        geo.properties.name === location ||
                                        geo.id === location
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
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>
        </div>
    )
}

export default Map
import React, { useContext, useEffect, useRef, useState } from "react";
import "../../../styles/geekday-styles/schedule-styles/schedule.css";

import ScheduleBox from "./ScheduleBox";
import { DataContext } from "../../../App";

interface Props {
    title: string;
    salonDetail: {
        title: string;
        speaker: string;
        time: string;
        image: string;
    }[];
    slideValue: number;
    setSlideValue: (value: number) => void;
}

const ScheduleStrip = (props: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { mobile } = useContext(DataContext);
    const [isOrigin, setIsOrigin] = useState(false);
    const [mouseStart, setMouseStart] = useState(0);
    const [mouseCurrent, setMouseCurrent] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    useEffect(() => {
        if (containerRef.current && !isOrigin) {
            containerRef.current.scrollLeft = props.slideValue;
        }
    }, [isOrigin, props.slideValue]);

    useEffect(() => {
        if (isDrag && !mobile) {
            const newSlideValue =
                props.slideValue + (mouseStart - mouseCurrent);

            if (
                containerRef.current &&
                containerRef.current.firstElementChild &&
                newSlideValue >= 0 &&
                newSlideValue <=
                    containerRef.current.firstElementChild.getBoundingClientRect()
                        .width
            ) {
                props.setSlideValue(newSlideValue);
            }
            setMouseStart(mouseCurrent);
        }
    }, [isDrag, mobile, mouseCurrent, mouseStart, props]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const newPosition = containerRef.current.scrollLeft;
                props.setSlideValue(newPosition);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            setMouseCurrent(mouseX);
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (containerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [props]);

    return (
        <div className="schedule-strip">
            <p className="schedule-strip-title">{props.title}</p>
            <div
                ref={containerRef}
                className="schedule-strip-list"
                onTouchStart={() => setIsOrigin(true)}
                onTouchEnd={() => setIsOrigin(false)}
                onMouseDown={(event) => {
                    setIsDrag(true);
                    setMouseStart(event.clientX);
                }}
                onMouseUp={() => {
                    setIsDrag(false);
                }}
            >
                {props.salonDetail.map((member, index) => {
                    return (
                        <ScheduleBox
                            key={index}
                            title={member.title}
                            speaker={member.speaker}
                            time={member.time}
                            image={member.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ScheduleStrip;

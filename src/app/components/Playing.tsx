"use client"

import { useState } from "react"
import { useTheme } from "@mui/material/styles"

import Image from "next/image"
import Button from "./Button"
import Slider from "@mui/material/Slider"

import {
  VolumeUp,
  SkipPrevious,
  SkipNext,
  Replay,
  Shuffle,
  PlayArrow,
  FavoriteBorder,
  Favorite,
  Pause,
} from "@mui/icons-material"

const Playing = () => {
  const [value, setValue] = useState<number>(30)
  const [position, setPosition] = useState(32)
  const [liked, setLiked] = useState(false)
  const [play, setPlay] = useState(false)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  // Calculate amount played and amount remainng of a song
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60)
    const secondLeft = value - minute * 60
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
  }

  function handleLiked() {
    if (!liked) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }

  function handlePlay() {
    if (!play) {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }

  return (
    <>
      {/* Large screens nav */}
      <div className="h-[72px] max-md:hidden flex flex-row">
        {/* Currently playing card */}
        <div className="w-[30%] flex items-center pl-2">
          <div className="relative h-[56px] aspect-square">
            <Image
              fill
              alt="Song playing"
              src="/images/night.jpeg"
              className="rounded"
            />
          </div>

          <div className="ml-3 mr-2 flex flex-col font-semibold bg-black overflow-hidden">
            <a
              href=""
              className="text-sm max-lg:hover:animate-[mdFlow_15s_ease-in-out_infinite] lg:hover:animate-[lgFlow_15s_ease-in-out_infinite] whitespace-nowrap w-min"
            >
              The Night We Met (feat. Phoebe Bridgers)
            </a>
            <div className="text-[0.6875rem] text-[#b3b3b3]">
              <a href="">Lord Huron</a>
              <span>, </span>
              <a href="">Phoebe Bridgers</a>
            </div>
          </div>

          <Button onClick={handleLiked}>
            {liked ? (
              <Favorite className="text-[#1ed760]" />
            ) : (
              <FavoriteBorder />
            )}
          </Button>
        </div>

        {/* Playbar actions */}
        <div className="w-[40%]">
          {/* Container */}
          <div className="h-full w-full flex flex-col justify-center max-w-[722px] mx-auto">
            {/* Play buttons */}
            <div className="w-full flex items-center justify-center gap-4">
              <div className="flex w-full justify-end gap-2">
                <Button>
                  <Shuffle />
                </Button>
                <Button>
                  <SkipPrevious />
                </Button>
              </div>
              <div>
                <Button onClick={handlePlay} className="bg-white text-black">
                  {play ? <Pause /> : <PlayArrow />}
                </Button>
              </div>
              <div className="flex w-full gap-2">
                <Button>
                  <SkipNext />
                </Button>
                <Button>
                  <Replay />
                </Button>
              </div>
            </div>
            {/* Playbar */}
            <div className="flex items-center gap-2">
              <div className="text-xs text-[#a7a7a7] min-w-[40px] flex justify-end">
                2:38
              </div>
              <Slider
                className="w-full"
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={200}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                  color: "#fff",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: "0px 0px 0px 0px",
                    },
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28,
                  },
                }}
              />
              <div className="text-xs text-[#a7a7a7] min-w-[40px] flex">
                -1:37
              </div>
            </div>
          </div>
        </div>

        {/* Volume control */}
        <div className="w-[30%] flex items-center justify-end ">
          <div className="flex items-center basis-[125px] mr-2">
            <VolumeUp className="min-w-[32px]" />
            <Slider
              aria-label="Volume"
              value={value}
              onChange={handleChange}
              sx={{
                color: "#fff",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: "0px 0px 0px 0px",
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
          </div>
        </div>
      </div>
      {/* Small screens nav */}
      <div className="relative h-[56px] mx-2 p-2 md:hidden my-auto bg-[rgb(105,31,165)] rounded-md flex items-center">
        {/* Description */}
        <div className="relative h-full my-2 w-full flex items-center gap-2">
          <div className="relative h-10 aspect-square">
            <Image
              fill
              alt="Song playing"
              src="/images/night.jpeg"
              className="rounded"
            />
          </div>
          <div className="h-full flex flex-col justify-center text-[0.8125rem] w-full shrink overflow-hidden whitespace-nowrap">
            <div className="font-semibold max-[400px]:animate-[smFlow_10s_ease-in-out_infinite]">
              The Night We Met (feat. Phoebe Birders)
            </div>
            <div>Lord Huron, Phoebe Bridgers</div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleLiked}>
              {liked ? (
                <Favorite className="text-[#1ed760]" />
              ) : (
                <FavoriteBorder />
              )}
            </Button>
            <Button onClick={handlePlay}>
              {play ? (
                <Pause sx={{ fontSize: 28 }} />
              ) : (
                <PlayArrow sx={{ fontSize: 30 }} />
              )}
            </Button>
          </div>
        </div>
        {/* Playbar */}
        <div className="w-full px-2 h-0 absolute bottom-[22px] left-0 right-0 mx-auto">
          <Slider
            disabled
            defaultValue={30}
            aria-label="Disabled slider"
            sx={{
              height: 2,
              "& .MuiSlider-thumb": {
                color: "#fff",
                width: 0,
                height: 0,
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Playing

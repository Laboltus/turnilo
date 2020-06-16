/*
 * Copyright 2017-2018 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Dataset } from "plywood";
import * as React from "react";
import { Essence } from "../../../../common/models/essence/essence";
import { Stage } from "../../../../common/models/stage/stage";
import { ImmutableRecord } from "../../../../common/utils/immutable-utils/immutable-utils";
import { LineChartSettings } from "../../../../common/visualization-manifests/line-chart/settings";
import { InteractionsProps } from "../interactions/interaction-controller";
import { ContinuousScale } from "../utils/continuous-types";
import { ContinuousTicks } from "../utils/pick-x-axis-ticks";
import { ChartsPerSeries } from "./charts-per-series/charts-per-series";
import { ChartsPerSplit } from "./charts-per-split/charts-per-split";

interface ChartsProps {
  interactions: InteractionsProps;
  essence: Essence;
  xScale: ContinuousScale;
  xTicks: ContinuousTicks;
  dataset: Dataset;
  stage: Stage;
}

export const Charts: React.SFC<ChartsProps> = props => {
  const { essence } = props;
  const { groupSeries } = essence.visualizationSettings as ImmutableRecord<LineChartSettings>;

  return groupSeries
    ? <ChartsPerSplit {...props} />
    : <ChartsPerSeries {...props} />;
};

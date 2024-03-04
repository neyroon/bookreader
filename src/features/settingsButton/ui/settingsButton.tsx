import { selectThemeType, setTheme } from '@/entities/theme/model/themeSlice';
import { Themes } from '@/entities/theme/model/types';
import { useOutsideClick } from '@/shared/lib/use';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { Button } from '@/shared/ui/button';
import { Switch } from '@/shared/ui/switch';
import { Typography } from '@/shared/ui/typography';
import { useRef, useState } from 'react';

import {
  FontFamily,
  FontSize,
  Hyphens,
  LineHeight,
  setFontFamily,
  setFontSize,
  setHyphens,
  setLineHeight,
  setTextAlign,
  TextAlign,
} from '../model';
import {
  AlignIcon,
  AlignIcons,
  AttributeBox,
  ButtonContent,
  FontContainer,
  FontSizeBox,
  FontSizeElement,
  LargeFontSizeIcon,
  LineHeightBox,
  LineHeightIcon,
  NormalFontSizeIcon,
  StyledAlignJustifyIcon,
  StyledAlignLeftIcon,
  StyledFontIcon,
  StyledIntermediateLineHeightIcon,
  StyledMaxLineHeightIcon,
  StyledMinLineHeightIcon,
  ThemeBox,
  ThemeDark,
  ThemeLight,
} from './settingsButton.styles';

export const SettingsButton = () => {
  const themeType = useAppSelector(selectThemeType);
  const { fontFamily, fontSize, lineHeight, hyphens, textAlign } =
    useAppSelector((state) => state.font);
  const dispatch = useAppDispatch();
  const [fontBoxOpen, setFontBoxOpen] = useState(false);
  const buttonContentRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(buttonContentRef, () => {
    setFontBoxOpen(false);
  });

  const handleFontClick = () => {
    setFontBoxOpen(true);
  };

  const handleFontFamilyClick = (font: FontFamily) => () => {
    dispatch(setFontFamily(font));
  };

  const handleFontAlignClick = (align: TextAlign) => () => {
    dispatch(setTextAlign(align));
  };

  const handleHyphensChange = (checked: boolean) => {
    if (checked) dispatch(setHyphens(Hyphens.Auto));
    else dispatch(setHyphens(Hyphens.None));
  };

  const handleThemeChange = (theme: Themes) => {
    dispatch(setTheme(theme));
  };

  const handleLineHeightChange = (lineHeight: LineHeight) => {
    dispatch(setLineHeight(lineHeight));
  };

  const handleFontSizeChange = (fontSize: FontSize) => {
    dispatch(setFontSize(fontSize));
  };

  return (
    <Button onClick={handleFontClick}>
      <StyledFontIcon />
      {fontBoxOpen && (
        <ButtonContent ref={buttonContentRef}>
          <FontSizeBox>
            <FontSizeElement
              onClick={() => handleFontSizeChange(FontSize.Normal)}
            >
              <NormalFontSizeIcon $active={fontSize === FontSize.Normal} />
            </FontSizeElement>
            <FontSizeElement
              onClick={() => handleFontSizeChange(FontSize.Large)}
            >
              <LargeFontSizeIcon $active={fontSize === FontSize.Large} />
            </FontSizeElement>
          </FontSizeBox>
          <LineHeightBox>
            <LineHeightIcon
              onClick={() => handleLineHeightChange(LineHeight.Minimum)}
            >
              <StyledMinLineHeightIcon
                $active={lineHeight === LineHeight.Minimum}
              />
            </LineHeightIcon>
            <LineHeightIcon
              onClick={() => handleLineHeightChange(LineHeight.Intermediate)}
            >
              <StyledIntermediateLineHeightIcon
                $active={lineHeight === LineHeight.Intermediate}
              />
            </LineHeightIcon>
            <LineHeightIcon
              onClick={() => handleLineHeightChange(LineHeight.Maximum)}
            >
              <StyledMaxLineHeightIcon
                $active={lineHeight === LineHeight.Maximum}
              />
            </LineHeightIcon>
          </LineHeightBox>
          <ThemeBox>
            <ThemeLight
              $active={themeType === Themes.LIGHT}
              onClick={() => handleThemeChange(Themes.LIGHT)}
            >
              <Typography $size="small-medium-text">Белый</Typography>
            </ThemeLight>
            <ThemeDark
              $active={themeType === Themes.DARK}
              onClick={() => handleThemeChange(Themes.DARK)}
            >
              <Typography $size="small-medium-text">Черный</Typography>
            </ThemeDark>
          </ThemeBox>
          <AttributeBox>
            <Typography $size="normal-text">Переносы</Typography>
            <Switch
              checked={hyphens === Hyphens.Auto}
              onChange={handleHyphensChange}
            />
          </AttributeBox>
          <AttributeBox>
            <Typography $size="normal-text">Выравнивание</Typography>
            <AlignIcons>
              <AlignIcon onClick={handleFontAlignClick(TextAlign.Left)}>
                <StyledAlignLeftIcon $active={textAlign === TextAlign.Left} />
              </AlignIcon>
              <AlignIcon onClick={handleFontAlignClick(TextAlign.Justify)}>
                <StyledAlignJustifyIcon
                  $active={textAlign === TextAlign.Justify}
                />
              </AlignIcon>
            </AlignIcons>
          </AttributeBox>
          {Object.values(FontFamily).map((font) => (
            <FontContainer
              key={font}
              $size="normal-text"
              $active={fontFamily === font}
              onClick={handleFontFamilyClick(font)}
            >
              {font}
            </FontContainer>
          ))}
        </ButtonContent>
      )}
    </Button>
  );
};

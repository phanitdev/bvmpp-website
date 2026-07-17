import { homeTranslations } from "./home.translation";
import { propertiesTranslations } from "./properties.translation";
import { newPromotionTranslations } from "./new-promotion.translation";
import { navbarTranslations } from "./navbar.translation";
import { careerTranslations } from "./career.translation";
import { newBuildingTranslations } from "./new-building.translation";


export const allTranslations: Record<string, Record<'en' | 'km', string>> ={
    ...homeTranslations,
    ...propertiesTranslations,
    ...newPromotionTranslations,
    ...navbarTranslations,
    ...careerTranslations,
    ...newBuildingTranslations
};
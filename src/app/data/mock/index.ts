import { AuthMockApi } from 'app/data/mock/auth';
import { AnalyticsMockApi } from 'app/data/mock/dashboards/analytics';
import { CryptoMockApi } from 'app/data/mock/dashboards/crypto';
import { FinanceMockApi } from 'app/data/mock/dashboards/finance';
import { HelpCenterMockApi } from 'app/data/mock/pages/help-center';
import { IconsMockApi } from 'app/data/mock/ui/icons';
import { MessagesMockApi } from 'app/data/mock/common/messages';
import { NavigationMockApi } from 'app/data/mock/common/navigation';
import { NotificationsMockApi } from 'app/data/mock/common/notifications';
import { SearchMockApi } from 'app/data/mock/common/search';
import { ShortcutsMockApi } from 'app/data/mock/common/shortcuts';
import { UserMockApi } from 'app/data/mock/common/user';

export const mockDataServices = [
    AnalyticsMockApi,
    AuthMockApi,
    CryptoMockApi,
    FinanceMockApi,
    HelpCenterMockApi,
    IconsMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    SearchMockApi,
    ShortcutsMockApi,
    UserMockApi
];
